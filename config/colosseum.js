'use strict'

module.exports = {
  env: 'colosseum',
  blockTime: 12 * 1000, // 10s
  machinesRunning: 6,
  txs: {
    tps: {
      target: 2000,
      increment: {
        enabled: false,
      }
    },
    etxFreq: 0
  },
  memPool: {
    max: 12000,
  }
}
