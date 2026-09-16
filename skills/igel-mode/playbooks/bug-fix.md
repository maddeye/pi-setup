# Bug fix

The result corrects behavior that is already expected.

1. Read and apply [`principle-fix-root-causes`](../../principle-fix-root-causes/SKILL.md).
2. Reproduce the failure before editing. Trace every caller of the shared code you may change.
3. If a cheap local regression test exists, read and apply [`tdd`](../../tdd/SKILL.md). If a test changes, also read and apply [`principle-test-behavior-not-implementation`](../../principle-test-behavior-not-implementation/SKILL.md).
4. Fix the root cause with the smallest justified change.
5. Run the original reproduction and the nearest relevant checks.

Completion check: the original reproduction fails before the change, passes after it, and the evidence confirms the root cause rather than a masked symptom.
