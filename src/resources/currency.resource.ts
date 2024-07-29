const resourceCurrency = {
  properties: {
    price: { type: 'currency' },
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

export default resourceCurrency;
