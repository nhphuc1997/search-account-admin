const transactionHistoryResource = {
  properties: {
    status: {
      availableValues: [
        { label: 'Bảo lưu', value: 'Bảo lưu' },
        { label: 'Đang xử lí', value: 'Đang xử lí' },
        { label: 'Đã giải ngân', value: 'Đã giải ngân' },
      ]
    },
    amount: {
      type: 'currency'
    }
  },
}

export default transactionHistoryResource;
