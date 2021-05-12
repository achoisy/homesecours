/* eslint-disable no-console */
const execa = require('execa');
const fs = require('fs');
(async () => {
  try {
    // await execa('git', ['checkout', '--orphan', 'gh-pages']);
    // eslint-disable-next-line no-console
    console.log('Building started...');
    await execa('yarn', ['build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';

    // Commit all changes to gh-pages local branch
    await execa('git', ['add', 'dist']);
    await execa('git', ['commit', '-m', 'deploy-gh-pages']);

    console.log('Pushing to gh-pages...');
    await execa('git', [
      'subtree',
      'push',
      '--prefix',
      'dist',
      'origin',
      'gh-pages',
    ]);

    console.log('Successfully deployed, check your settings');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
