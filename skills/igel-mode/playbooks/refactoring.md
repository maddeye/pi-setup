# Refactoring

The structure changes. Observable behavior does not.

1. Read and apply [`how`](../../how/SKILL.md) to establish the current behavior and callers.
2. Read and apply [`principle-laziness-protocol`](../../principle-laziness-protocol/SKILL.md).
3. Read and apply [`principle-minimize-reader-load`](../../principle-minimize-reader-load/SKILL.md).
4. Pin current behavior with the narrowest existing test, snapshot, script, or reproducible output.
5. Delete or flatten before adding structure. Keep the behavior pin green after each change.
6. Compare the same real output before and after the refactor.

Completion check: behavior is unchanged and the final code removes measurable reader load, indirection, state, branches, or duplication.
