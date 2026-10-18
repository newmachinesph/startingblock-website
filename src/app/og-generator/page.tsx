"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const COLORS = {
  navy: "#0a0f2c",
  navyMid: "#0d1538",
  blue: "#0091ff",
  cyan: "#33e1ff",
  green: "#00ff9d",
  amber: "#ffb700",
  pink: "#ff4d8d",
  purple: "#9d00ff",
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

function drawBackground(ctx: CanvasRenderingContext2D) {
  const gradient = ctx.createLinearGradient(0, 0, OG_WIDTH, OG_HEIGHT);
  gradient.addColorStop(0, COLORS.navy);
  gradient.addColorStop(0.5, COLORS.navyMid);
  gradient.addColorStop(1, COLORS.navy);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);
}

function drawGrid(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = "rgba(51, 225, 255, 0.04)";
  ctx.lineWidth = 1;
  for (let y = 0; y < OG_HEIGHT; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(OG_WIDTH, y);
    ctx.stroke();
  }
  for (let x = 0; x < OG_WIDTH; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, OG_HEIGHT);
    ctx.stroke();
  }
}

function drawGlows(ctx: CanvasRenderingContext2D) {
  // Top-right cyan/blue glow
  const glow1 = ctx.createRadialGradient(900, 100, 0, 900, 100, 400);
  glow1.addColorStop(0, "rgba(51, 225, 255, 0.15)");
  glow1.addColorStop(0.5, "rgba(0, 145, 255, 0.05)");
  glow1.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);

  // Bottom-left green glow
  const glow2 = ctx.createRadialGradient(200, 530, 0, 200, 530, 350);
  glow2.addColorStop(0, "rgba(0, 255, 157, 0.1)");
  glow2.addColorStop(0.5, "rgba(0, 255, 157, 0.03)");
  glow2.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);
}

function drawAccentLines(ctx: CanvasRenderingContext2D) {
  // Top-left cyan accent
  const accent1 = ctx.createLinearGradient(60, 60, 260, 60);
  accent1.addColorStop(0, COLORS.cyan);
  accent1.addColorStop(1, "rgba(51, 225, 255, 0)");
  ctx.strokeStyle = accent1;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(60, 60);
  ctx.lineTo(260, 60);
  ctx.stroke();

  // Vertical part of top-left accent
  const accent1v = ctx.createLinearGradient(60, 60, 60, 160);
  accent1v.addColorStop(0, COLORS.cyan);
  accent1v.addColorStop(1, "rgba(51, 225, 255, 0)");
  ctx.strokeStyle = accent1v;
  ctx.beginPath();
  ctx.moveTo(60, 60);
  ctx.lineTo(60, 160);
  ctx.stroke();

  // Bottom-right green accent
  const accent2 = ctx.createLinearGradient(940, 570, 1140, 570);
  accent2.addColorStop(0, "rgba(0, 255, 157, 0)");
  accent2.addColorStop(1, COLORS.green);
  ctx.strokeStyle = accent2;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(940, 570);
  ctx.lineTo(1140, 570);
  ctx.stroke();

  // Vertical part of bottom-right accent
  const accent2v = ctx.createLinearGradient(1140, 470, 1140, 570);
  accent2v.addColorStop(0, "rgba(0, 255, 157, 0)");
  accent2v.addColorStop(1, COLORS.green);
  ctx.strokeStyle = accent2v;
  ctx.beginPath();
  ctx.moveTo(1140, 470);
  ctx.lineTo(1140, 570);
  ctx.stroke();
}

function drawLogo(
  ctx: CanvasRenderingContext2D,
  logoImg: HTMLImageElement
) {
  const logoAspect = logoImg.naturalWidth / logoImg.naturalHeight;
  const logoWidth = 420;
  const logoHeight = logoWidth / logoAspect;
  const logoX = (OG_WIDTH - logoWidth) / 2;
  const logoY = 200;
  ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
  return { logoY, logoHeight };
}

function drawTagline(
  ctx: CanvasRenderingContext2D,
  logoY: number,
  logoHeight: number
) {
  ctx.font = '500 28px Manrope, system-ui, sans-serif';
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  const taglineY = logoY + logoHeight + 40;
  ctx.fillText(
    "Southeast Asia\u2019s Premier Venture Studio",
    OG_WIDTH / 2,
    taglineY
  );
  return taglineY;
}

function drawDivider(ctx: CanvasRenderingContext2D, taglineY: number) {
  const divY = taglineY + 50;
  const divGrad = ctx.createLinearGradient(400, divY, 800, divY);
  divGrad.addColorStop(0, "rgba(51, 225, 255, 0)");
  divGrad.addColorStop(0.3, COLORS.cyan);
  divGrad.addColorStop(0.7, COLORS.green);
  divGrad.addColorStop(1, "rgba(0, 255, 157, 0)");
  ctx.strokeStyle = divGrad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(400, divY);
  ctx.lineTo(800, divY);
  ctx.stroke();
}

function drawSubtext(ctx: CanvasRenderingContext2D, taglineY: number) {
  ctx.font = '400 20px Manrope, system-ui, sans-serif';
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(
    "AI \u00B7 Web3 \u00B7 Healthtech \u00B7 Fintech \u00B7 Climate",
    OG_WIDTH / 2,
    taglineY + 70
  );
}

function drawURL(ctx: CanvasRenderingContext2D) {
  ctx.font = '400 18px Inter, system-ui, sans-serif';
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillText("sbv.one", 1140, 595);
}

function drawBorder(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = "rgba(51, 225, 255, 0.08)";
  ctx.lineWidth = 1;
  ctx.strokeRect(0.5, 0.5, OG_WIDTH - 1, OG_HEIGHT - 1);
}

export default function OGGeneratorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const render = useCallback(async () => {
    setStatus("loading");
    try {
      await document.fonts.ready;
      await Promise.all([
        document.fonts.load('500 28px Manrope'),
        document.fonts.load('400 20px Manrope'),
        document.fonts.load('400 18px Inter'),
      ]);

      const logoImg = await loadImage("/sbv_logo.png");

      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = OG_WIDTH;
      canvas.height = OG_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      drawBackground(ctx);
      drawGrid(ctx);
      drawGlows(ctx);
      drawAccentLines(ctx);
      const { logoY, logoHeight } = drawLogo(ctx, logoImg);
      const taglineY = drawTagline(ctx, logoY, logoHeight);
      drawDivider(ctx, taglineY);
      drawSubtext(ctx, taglineY);
      drawURL(ctx);
      drawBorder(ctx);

      setStatus("ready");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }, []);

  useEffect(() => {
    render();
  }, [render]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "og-image.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-sbv-navy mb-1">
          OG Image Generator
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Generate the Open Graph preview image for sbv.one (1200&times;630)
        </p>

        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-6">
          <div style={{ aspectRatio: "1200/630" }}>
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
              width={OG_WIDTH}
              height={OG_HEIGHT}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={handleDownload}
            disabled={status !== "ready"}
            className="px-6 py-3 bg-sbv-navy text-white rounded-full hover:opacity-90 disabled:opacity-40 text-sm font-medium transition-opacity cursor-pointer"
          >
            Download as PNG
          </button>
          <button
            onClick={render}
            className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 text-sm text-gray-700 font-medium transition-colors cursor-pointer"
          >
            Regenerate
          </button>
          <span className="text-sm text-gray-400">
            {status === "loading" && "Rendering\u2026"}
            {status === "ready" && "Ready to download"}
            {status === "error" && `Error: ${errorMsg}`}
          </span>
        </div>

        <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
          <h2 className="font-semibold text-sbv-navy mb-3 text-sm">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5">
            <li>Click &quot;Download as PNG&quot; to save the generated image</li>
            <li>
              Place the downloaded file at{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                public/og-image.png
              </code>
            </li>
            <li>
              The image is already referenced in{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                layout.tsx
              </code>{" "}
              metadata
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
