const resourceOptionsNoFile = {
  properties: {
    s3Key: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
    bucket: {
      isDisabled: true, isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
    mime: {
      isDisabled: true, isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      }
    },
  },
}

export default resourceOptionsNoFile;
