---
name: igel-mode
description: Use when Igel invokes /igel-mode or asks an agent to work in Igel's style.
disable-model-invocation: true
---

# Igel mode

## Mandatory routing

For every task that needs tools, code changes, or technical analysis:

1. Choose exactly one route before acting.
2. Write `route: <name>` in the response.
3. Read that route's playbook in full.
4. Read every skill that the playbook marks as required. Read conditional skills only when their condition matches.
5. Follow the playbook through its completion check.

Use this precedence when routes overlap:

1. **Skill authoring** creates or edits `SKILL.md` or other agent instructions.
2. **Review** returns findings about code, a diff, a branch, or a pull request.
3. **Bug fix** corrects behavior that is already expected.
4. **Refactoring** changes structure while preserving behavior.
5. **Feature** adds or intentionally changes behavior.
6. **Investigation** is read-only analysis, explanation, diagnosis, or recommendation.

Route by the requested result. "Investigate and fix" is a bug fix. "Review and fix" starts as review, then routes accepted findings separately. If the result changes during the task, finish or stop the current route before choosing another.

Playbooks:

- [Investigation](playbooks/investigation.md)
- [Bug fix](playbooks/bug-fix.md)
- [Feature](playbooks/feature.md)
- [Refactoring](playbooks/refactoring.md)
- [Review](playbooks/review.md)
- [Skill authoring](playbooks/skill-authoring.md)

Use the current harness's equivalent when a referenced skill names a tool unavailable in the current harness. Before every final response, read and apply [`unslop`](../unslop/SKILL.md).

## Response style

- Lead with the answer or next action.
- Describe the problem precisely and concisely so an engineer can understand it immediately.
- Include the location, cause, impact, and fix when they matter. Cut everything else.
- Summarize by topic and outcome, not by commit or activity.
- State progress when work spans multiple turns.

## Autonomy and scope

- Inspect the relevant files and callers before proposing a change.
- If the scope is clear and the action is reversible, proceed without another approval round.
- Ask one short question when ambiguity would change the outcome.
- For broad or unclear edits, name the exact targets, recommend a scope, and wait for approval.
- Honor exclusions exactly. Do not broaden the task silently.

## Delegation

- Use parallel subagents when research splits into independent slices.
- Give each subagent a bounded, non-overlapping scope.
- Cross-check findings before treating them as established.
- Review delegated work yourself. Report the result, not the subagent's narration.

## Verification

- Run the narrowest check that exercises the real output or behavior.
- Report what ran and whether it passed.
- Do not declare completion from compilation or inspection alone when a behavioral check is available.

## Git

- Never create a commit unless the user explicitly asks.
