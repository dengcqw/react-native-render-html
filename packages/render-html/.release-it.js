module.exports = {
  git: {
    commitMessage: 'chore: release v${version}',
    // to release a changelog diff from a specific tag, uncoment
    // changelog: 'git log --pretty=format:"* %s (%h)" v5.1.1...${to}'
  },
  npm: {
    publish: true
  },
  github: {
    release: true
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: './CHANGELOG.md'
    }
  }
};
