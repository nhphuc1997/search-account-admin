const transactionHistoryResource = {
  properties: {
    status: {
      availableValues: [
        { label: 'Bảo lưu', value: 'Bảo lưu' },
        { label: 'Đang xử lý', value: 'Đang xử lý' },
        { label: 'Đã giải ngân', value: 'Đã giải ngân' },
      ]
    },
    amount: {
      type: 'currency'
    }
  },
}

export default transactionHistoryResource;
