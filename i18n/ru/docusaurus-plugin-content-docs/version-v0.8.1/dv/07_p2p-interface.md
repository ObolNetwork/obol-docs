---
description: Связь между экземплярами Charon
---

# P2P интерфейс

P2P-интерфейс Charon примерно соответствует [Eth2 beacon P2P interface](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md).

- Метод общения: TCP over IPv4/IPv6.
- Идентификация: [Ethereum Node Records](https://eips.ethereum.org/EIPS/eip-778). 
- Рукопожатие: [noise-libp2p](https://github.com/libp2p/specs/tree/master/noise) с `secp256k1` ключами.
  - Каждый клиент charon должен иметь открытый ключ ENR, авторизованный в [cluster-lock.json](./08_distributed-validator-cluster-manifest.md) файл, чтобы рукопожатие клиента прошло успешно.
- Протокол обнаружения: [Discv5](https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md).
