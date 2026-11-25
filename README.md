[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Shayidinadapa/wifi-story-01/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Shayidinadapa/wifi-story-01/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

# wifi-story-01

One Wi-Fi network name that tells a whole story in 32 characters — an entry
for the [make.fun bounty](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978).

## The entry

> **Moved out. Password's mine now** (30 characters)

A passer-by scrolling a phone's network list gets the whole story in two
beats: somebody left home — or left someone — and the one who walked out is
the one holding the password now. The password is the punchline: the smallest
possible revenge, and the only thing they took with them.

## How to run it

Requires Node 22.18 or later (no dependencies to install).

```sh
node main.ts
```

It writes the Wi-Fi name to `output/entry.txt` (or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set), validates that
the name is 1–32 characters, a single line and non-blank, then reads the
file back to verify it landed exactly as intended.

## License

MIT — see [LICENSE](LICENSE).
