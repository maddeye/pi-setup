# Review

The result is findings about code, a diff, a branch, or a pull request. Do not edit unless the user also asks for fixes.

1. Establish the exact diff and review scope.
2. Apply the `thermos` skill (`/thermos`).
3. Trace each candidate finding through callers and tests. Drop findings that lack evidence.
4. Report findings first, ordered by impact. Include the exact location, failure mechanism, impact, and fix direction.

Completion check: every reported finding is caused by changed code, reproducible or traceable, and actionable. Say explicitly when no findings survive verification.
