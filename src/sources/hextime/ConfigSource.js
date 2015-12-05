const ConfigSource = {
  remoteAction: {
    remote() {},
    local() {
      return {
        startTime: 0,
        endTime: 24
      };
    },
    shouldFetch() {
      return true;
    },
    loading() {},
    success() {},
    error() {}
  }
};

export default ConfigSource;
