import { describe, it, expect } from "vitest";
import { escapeHtml } from "@/lib/email";

describe("escapeHtml", () => {
  it("escapes HTML special characters", () => {
    expect(escapeHtml("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#x27;xss&#x27;)&lt;/script&gt;"
    );
  });

  it("escapes ampersands", () => {
    expect(escapeHtml("foo & bar")).toBe("foo &amp; bar");
  });

  it("escapes double quotes", () => {
    expect(escapeHtml('he said "hello"')).toBe("he said &quot;hello&quot;");
  });

  it("returns empty string for empty input", () => {
    expect(escapeHtml("")).toBe("");
  });

  it("does not modify safe strings", () => {
    expect(escapeHtml("Hello World 123")).toBe("Hello World 123");
  });

  it("handles all special chars together", () => {
    expect(escapeHtml(`<div class="a" data-x='b'>&</div>`)).toBe(
      "&lt;div class=&quot;a&quot; data-x=&#x27;b&#x27;&gt;&amp;&lt;/div&gt;"
    );
  });
});
