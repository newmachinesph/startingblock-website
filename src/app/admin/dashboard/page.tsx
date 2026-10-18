"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type Tab = "applications" | "contacts" | "newsletter";

interface Application {
  id: string;
  founderName: string;
  email: string;
  startupName: string;
  website: string | null;
  stage: string;
  industry: string;
  location: string;
  teamSize: string;
  pitch: string;
  support: string | null;
  read: boolean;
  createdAt: string;
}

interface Contact {
  id: string;
  type: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

interface Newsletter {
  id: string;
  email: string;
  createdAt: string;
}

export default function DashboardPage() {
  const { status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin");
  }, [status, router]);

  const fetchData = useCallback(() => {
    fetch("/api/admin/submissions")
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.applications || []);
        setContacts(data.contacts || []);
        setNewsletters(data.newsletters || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (status === "authenticated") fetchData();
  }, [status, fetchData]);

  // Clear selection when switching tabs
  useEffect(() => {
    setSelected(new Set());
  }, [activeTab]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "applications", label: "Applications", count: applications.length },
    { key: "contacts", label: "Contacts", count: contacts.length },
    { key: "newsletter", label: "Newsletter", count: newsletters.length },
  ];

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll(ids: string[]) {
    const allSelected = ids.every((id) => selected.has(id));
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(ids));
    }
  }

  async function markRead(ids: string[], type: "application" | "contact", read: boolean) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids, type, read }),
    });
    if (type === "application") {
      setApplications((prev) => prev.map((a) => (ids.includes(a.id) ? { ...a, read } : a)));
    } else {
      setContacts((prev) => prev.map((c) => (ids.includes(c.id) ? { ...c, read } : c)));
    }
    setSelected(new Set());
  }

  async function deleteItems(ids: string[], type: "application" | "contact" | "newsletter") {
    if (!confirm(`Delete ${ids.length} item${ids.length > 1 ? "s" : ""}?`)) return;
    await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids, type }),
    });
    if (type === "application") {
      setApplications((prev) => prev.filter((a) => !ids.includes(a.id)));
    } else if (type === "contact") {
      setContacts((prev) => prev.filter((c) => !ids.includes(c.id)));
    } else {
      setNewsletters((prev) => prev.filter((n) => !ids.includes(n.id)));
    }
    setSelected(new Set());
  }

  const selectedArr = Array.from(selected);
  const hasSelection = selectedArr.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-light tracking-[-0.02em] text-gray-900 dark:text-white">
            SBV <span className="text-gray-400 font-normal">Dashboard</span>
          </h1>
          <button
            onClick={() => signOut({ callbackUrl: "/admin" })}
            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs + Bulk Actions */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex gap-1 bg-white dark:bg-gray-950 rounded-lg p-1 border border-gray-200 dark:border-gray-800 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  activeTab === tab.key
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-60">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Bulk actions */}
          {hasSelection && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{selectedArr.length} selected</span>
              {activeTab !== "newsletter" && (
                <>
                  <button
                    onClick={() => markRead(selectedArr, activeTab === "applications" ? "application" : "contact", true)}
                    className="px-3 py-1.5 text-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Mark Read
                  </button>
                  <button
                    onClick={() => markRead(selectedArr, activeTab === "applications" ? "application" : "contact", false)}
                    className="px-3 py-1.5 text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Mark Unread
                  </button>
                </>
              )}
              <button
                onClick={() => deleteItems(selectedArr, activeTab === "applications" ? "application" : activeTab === "contacts" ? "contact" : "newsletter")}
                className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <p className="text-gray-500">Loading submissions...</p>
        ) : (
          <>
            {/* Applications Table */}
            {activeTab === "applications" && (
              <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                {applications.length === 0 ? (
                  <p className="p-8 text-gray-500 text-center">No applications yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <th className="p-4 w-10">
                            <input
                              type="checkbox"
                              checked={applications.length > 0 && applications.every((a) => selected.has(a.id))}
                              onChange={() => toggleSelectAll(applications.map((a) => a.id))}
                              className="rounded border-gray-300 dark:border-gray-600"
                            />
                          </th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Date</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Founder</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Email</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Startup</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Stage</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Industry</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Location</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Team</th>
                          <th className="p-4 w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr
                            key={app.id}
                            className={`border-b border-gray-50 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50 ${
                              !app.read ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
                            }`}
                          >
                            <td className="p-4">
                              <input
                                type="checkbox"
                                checked={selected.has(app.id)}
                                onChange={() => toggleSelect(app.id)}
                                className="rounded border-gray-300 dark:border-gray-600"
                              />
                            </td>
                            <td className="p-4 text-gray-500 whitespace-nowrap">{formatDate(app.createdAt)}</td>
                            <td className={`p-4 ${!app.read ? "text-gray-900 dark:text-white font-semibold" : "text-gray-900 dark:text-white font-medium"}`}>
                              {!app.read && <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>}
                              {app.founderName}
                            </td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{app.email}</td>
                            <td className="p-4 text-gray-900 dark:text-white">{app.startupName}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{app.stage}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{app.industry}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{app.location}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{app.teamSize}</td>
                            <td className="p-4">
                              <button
                                onClick={() => deleteItems([app.id], "application")}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                title="Delete"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Contacts Table */}
            {activeTab === "contacts" && (
              <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                {contacts.length === 0 ? (
                  <p className="p-8 text-gray-500 text-center">No contact messages yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <th className="p-4 w-10">
                            <input
                              type="checkbox"
                              checked={contacts.length > 0 && contacts.every((c) => selected.has(c.id))}
                              onChange={() => toggleSelectAll(contacts.map((c) => c.id))}
                              className="rounded border-gray-300 dark:border-gray-600"
                            />
                          </th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Date</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Type</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Name</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Email</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Company</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Message</th>
                          <th className="p-4 w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact) => (
                          <tr
                            key={contact.id}
                            className={`border-b border-gray-50 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50 ${
                              !contact.read ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
                            }`}
                          >
                            <td className="p-4">
                              <input
                                type="checkbox"
                                checked={selected.has(contact.id)}
                                onChange={() => toggleSelect(contact.id)}
                                className="rounded border-gray-300 dark:border-gray-600"
                              />
                            </td>
                            <td className="p-4 text-gray-500 whitespace-nowrap">{formatDate(contact.createdAt)}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{contact.type}</td>
                            <td className={`p-4 ${!contact.read ? "text-gray-900 dark:text-white font-semibold" : "text-gray-900 dark:text-white font-medium"}`}>
                              {!contact.read && <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>}
                              {contact.name}
                            </td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{contact.email}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400">{contact.company || "—"}</td>
                            <td className="p-4 text-gray-600 dark:text-gray-400 max-w-xs truncate">{contact.message}</td>
                            <td className="p-4">
                              <button
                                onClick={() => deleteItems([contact.id], "contact")}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                title="Delete"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Newsletter Table */}
            {activeTab === "newsletter" && (
              <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                {newsletters.length === 0 ? (
                  <p className="p-8 text-gray-500 text-center">No subscribers yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <th className="p-4 w-10">
                            <input
                              type="checkbox"
                              checked={newsletters.length > 0 && newsletters.every((n) => selected.has(n.id))}
                              onChange={() => toggleSelectAll(newsletters.map((n) => n.id))}
                              className="rounded border-gray-300 dark:border-gray-600"
                            />
                          </th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Date</th>
                          <th className="text-left p-4 text-xs text-gray-500 uppercase tracking-wider font-medium">Email</th>
                          <th className="p-4 w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsletters.map((sub) => (
                          <tr key={sub.id} className="border-b border-gray-50 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                            <td className="p-4">
                              <input
                                type="checkbox"
                                checked={selected.has(sub.id)}
                                onChange={() => toggleSelect(sub.id)}
                                className="rounded border-gray-300 dark:border-gray-600"
                              />
                            </td>
                            <td className="p-4 text-gray-500 whitespace-nowrap">{formatDate(sub.createdAt)}</td>
                            <td className="p-4 text-gray-900 dark:text-white">{sub.email}</td>
                            <td className="p-4">
                              <button
                                onClick={() => deleteItems([sub.id], "newsletter")}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                title="Delete"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
