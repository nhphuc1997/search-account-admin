const accountResource = {
  properties: {
    accountDigit: { type: 'text', isTitle: true },
    amountLocked: { type: 'currency' },
    amount: { type: 'currency' },
    status: {
      availableValues: [
        { label: 'Phong toả', value: 'Phong toả' },
        { label: 'Hoạt động bình thường', value: 'Hoạt động bình thường' },
      ]
    },
  },
}

export default accountResource;
