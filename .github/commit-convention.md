## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

Messages must be matched by the following regex:

```js
/^(revert: )?(feat|fix|docs|refactor|perf|test|workflow|build|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
```

<details>
  <summary>Explanation</summary>

| Message  | Decryption       |
| -------- | ---------------- |
| feat     | feature          |
| fix      | fix              |
| docs     | documentation    |
| refactor | refactoring      |
| perf     | performance      |
| test     | testing          |
| workflow | workflow         |
| build    | build            |
| chore    | chore            |
| types    | types            |
| wip      | work in progress |
| release  | release          |
| deps     | dependencies     |
</details>

#### Examples

Appears under "Features" header, `dev` subheader:

```bash
feat(dev): add 'comments' option
```

Appears under "Bug Fixes" header, `dev` subheader, with a link to issue #28:

```bash
fix(dev): fix dev error

close #12
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```bash
perf(build): remove 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```bash
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body, it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However, if there is any breaking change, the commit will always appear in the changelog. Other prefixes are up to your discretion. Suggested prefixes are `docs`, `chore`, `style`, `refactor`, and `test` for non-changelog related tasks.

### Scope

The scope could be anything specifying the place of the commit change. For example `dev`, `build`, `workflow`, `cli` etc...

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.
