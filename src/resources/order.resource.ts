const orderResourceOptions = {
  properties: {
    orderId: {
      isDisabled: true,
      isVisible: {
        edit: false,
        show: true,
        list: true,
        filter: true,
      }
    }
  },
}

export default orderResourceOptions;
