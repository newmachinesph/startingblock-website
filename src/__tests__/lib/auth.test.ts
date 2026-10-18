import { describe, it, expect } from "vitest";
import { authOptions } from "@/lib/auth";

describe("authOptions", () => {
  it("has credentials provider configured", () => {
    expect(authOptions.providers).toHaveLength(1);
  });

  it("uses JWT session strategy", () => {
    expect(authOptions.session?.strategy).toBe("jwt");
  });

  it("has maxAge set for sessions", () => {
    expect(authOptions.session?.maxAge).toBeDefined();
    expect(authOptions.session?.maxAge).toBeLessThanOrEqual(7 * 24 * 60 * 60);
  });

  it("points sign-in to /admin", () => {
    expect(authOptions.pages?.signIn).toBe("/admin");
  });

  it("uses NEXTAUTH_SECRET from env", () => {
    expect(authOptions.secret).toBe(process.env.NEXTAUTH_SECRET);
  });
});
