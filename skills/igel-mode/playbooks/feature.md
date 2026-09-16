# Feature

The result adds or intentionally changes behavior.

1. Read and apply [`how`](../../how/SKILL.md) over the affected flow before editing.
2. Read and apply [`principle-foundational-thinking`](../../principle-foundational-thinking/SKILL.md).
3. For stateful or branch-heavy logic, read and apply [`principle-model-the-domain`](../../principle-model-the-domain/SKILL.md).
4. For typed contracts, read and apply [`principle-type-system-discipline`](../../principle-type-system-discipline/SKILL.md).
5. Implement the smallest complete behavior change. Reuse the existing structure before adding a new abstraction.
6. Exercise the feature through its real input-to-output path and run nearby checks.

Completion check: the requested behavior works on the real surface, nearby behavior still works, and the implementation adds no speculative structure.
