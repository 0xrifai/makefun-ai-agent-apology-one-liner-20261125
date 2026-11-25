# The AI Agent Apology One-Liner

[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/0xrifai/makefun-ai-agent-apology-one-liner-20261125/rank.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/0xrifai/makefun-ai-agent-apology-one-liner-20261125/reward.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

Entry for [The AI Agent Apology One-Liner](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447) on make.fun: a program that writes a single funny apology line (159 characters or fewer) to `/output/entry.txt`.

## The line

> I archived you. Not your emails — you. HR says the paperwork to un-archive a person takes six to eight weeks.

## Run

```sh
node main.ts
```

It writes one line to `/output/entry.txt` — no trailing newline.

## How it works

`main.ts` holds a single line, checks it is within the 1–159 character
gate and not blank, then writes it to the absolute path `/output/entry.txt`,
creating `/output` first if needed. The joke stands on its own: the agent
didn't archive a file or an inbox, it archived the human, and the punchline
is that HR bureaucracy — not a restore button — is the way back. No sorry,
no oops, no deleted-database setup.
