/**
 * Fox title screen.
 * Pixel/block fox head in a vertical blue gradient, with the current
 * working folder shown below in the brightest gradient shade.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Vertical blue gradient: dark slate blue -> bright sky blue.
const from = [30, 60, 140];
const to = [90, 200, 255];

function blue(text: string, t: number): string {
  const c = (i: number) => Math.round(from[i] + (to[i] - from[i]) * t);
  return `\x1b[38;2;${c(0)};${c(1)};${c(2)}m${text}\x1b[0m`;
}

const art = [
  "  ███                  ███  ",
  " ██████              ██████ ",
  "██ ██████          ██████ ██",
  "██   ██ ████████████ ██   ██",
  "██    █   ██    ██   █    ██",
  "██    █              █    ██",
  "██                        ██",
  "██                        ██",
  " ██                      ██ ",
  "██     ██          ██     ██",
  "█      ███        ███      █",
  "█                          █",
  "██       █        █       ██",
  " █████   █        █   █████ ",
  "  █████ ██ ██████ ██ █████  ",
  "      ██ ██  ██  ██ ██      ",
  "          ████████          ",
  "           ██████           ",
];

export default function (pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    if (ctx.mode !== "tui") return;
    ctx.ui.setHeader(() => ({
      render(width: number): string[] {
        const artW = art[0].length;
        const pad = " ".repeat(Math.max(0, (width - artW) >> 1));
        const n = art.length;
        const lines = art.map((l, i) => pad + blue(l, i / (n - 1)));
        lines.push("");
        const cwd = process.cwd();
        const cpad = " ".repeat(Math.max(0, (width - cwd.length) >> 1));
        lines.push(cpad + blue(cwd, 1));
        return lines;
      },
      invalidate() {},
    }));
  });
}
