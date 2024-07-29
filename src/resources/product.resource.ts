const productResourceOptions = {
  properties: {
    shortDescription: { type: 'textarea' },
    description: { type: 'richtext' },
    textIntro: { type: 'textarea' },
    price: { type: 'currency' },
    name: { type: 'text' },
    color: { type: 'text' },
    kind: {
      availableValues: [
        { label: 'NEW', value: 'NEW' },
        { label: 'OLD', value: 'OLD' },
      ]
    },
    seat: {
      availableValues: [
        { label: '5 SEAT', value: 5 },
        { label: '4 SEAT', value: 4 },
        { label: '7 SEAT', value: 7 },
      ]
    },
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

export default productResourceOptions;
