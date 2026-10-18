import { describe, it, expect } from "vitest";
import { z } from "zod";

// Re-create the validation schemas used in API routes to test them directly
const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
  type: z.string().max(50).optional(),
});

const applySchema = z.object({
  founderName: z.string().min(1).max(200),
  email: z.string().email().max(320),
  startupName: z.string().min(1).max(200),
  website: z.string().max(500).optional(),
  stage: z.string().min(1).max(100),
  industry: z.string().min(1).max(100),
  location: z.string().min(1).max(200),
  teamSize: z.string().min(1).max(50),
  pitch: z.string().min(1).max(5000),
  support: z.string().max(2000).optional(),
});

const newsletterSchema = z.object({
  email: z.string().email().max(320),
});

describe("Contact form validation", () => {
  it("accepts valid contact data", () => {
    const result = contactSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I have a question.",
      type: "general",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing name", () => {
    const result = contactSchema.safeParse({
      email: "john@example.com",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({
      name: "John",
      email: "not-an-email",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects message exceeding max length", () => {
    const result = contactSchema.safeParse({
      name: "John",
      email: "john@example.com",
      message: "x".repeat(5001),
    });
    expect(result.success).toBe(false);
  });

  it("allows optional company", () => {
    const result = contactSchema.safeParse({
      name: "John",
      email: "john@example.com",
      message: "Hello",
    });
    expect(result.success).toBe(true);
  });
});

describe("Application form validation", () => {
  const validApplication = {
    founderName: "Jane Smith",
    email: "jane@startup.com",
    startupName: "TechCo",
    stage: "Pre-seed",
    industry: "AI",
    location: "Manila, Philippines",
    teamSize: "2-5",
    pitch: "We are building the future of AI.",
  };

  it("accepts valid application data", () => {
    const result = applySchema.safeParse(validApplication);
    expect(result.success).toBe(true);
  });

  it("rejects missing required fields", () => {
    const result = applySchema.safeParse({
      founderName: "Jane",
      email: "jane@startup.com",
    });
    expect(result.success).toBe(false);
  });

  it("allows optional website and support", () => {
    const result = applySchema.safeParse({
      ...validApplication,
      website: "https://techco.io",
      support: "Mentorship and funding",
    });
    expect(result.success).toBe(true);
  });

  it("rejects pitch exceeding max length", () => {
    const result = applySchema.safeParse({
      ...validApplication,
      pitch: "x".repeat(5001),
    });
    expect(result.success).toBe(false);
  });
});

describe("Newsletter validation", () => {
  it("accepts valid email", () => {
    const result = newsletterSchema.safeParse({ email: "user@example.com" });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = newsletterSchema.safeParse({ email: "not-email" });
    expect(result.success).toBe(false);
  });

  it("rejects empty email", () => {
    const result = newsletterSchema.safeParse({ email: "" });
    expect(result.success).toBe(false);
  });

  it("rejects missing email field", () => {
    const result = newsletterSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
