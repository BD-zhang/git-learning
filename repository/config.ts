class Config {
  public core: object
  public remote: object
  public branch: object
  public currentBranch: string
  constructor (currentBranch: string) {
    this.currentBranch = currentBranch
    this.core = {
      repositoryformatversion: 0,
      filemodev: false,
	    bare: false,
	    logallrefupdates: true,
	    symlinks: false,
	    ignorecase: true,
    }
    this.remote = {
      url: '',
      fetch: ''
    }
    this.branch = {
      remote: 'origin',
      merge: `refs/heads/${this.currentBranch}`
    }
  }
}