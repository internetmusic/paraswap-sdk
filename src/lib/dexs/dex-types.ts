import { Address } from '../../types';

export type DexParams = {
  callees: string[],
  calldata: string[],
  values: string[]
}

export type DEXData = {
  name: string,
  srcAmount: string,
  destAmount: string
}

export type UniswapV1DEXData = DEXData & {
  exchange: string,
  factory?: string,
  deadline: number,
  minEthBought: string,
}

export type UniswapV2DEXData = DEXData & {
  exchange?: Address,
  path: Address[],
  router: Address,
}

export type KyberDEXData = DEXData & {
  minConversionRate: string,
  maxDestAmount?: string,
  hint?: string,
}

export type BancorDEXData = DEXData & {
  minDestToken: string,
  path: Address[],
  bancorNetwork?: string
}

export type ExchangeData = {
  callees: string[],
  values: string[]
  startIndexes: number[],
  calldata: string
}

export type SwapData = ExchangeData & {
  srcToken: string,
  destToken: string,
  srcAmount: string,
  minDestinationAmount: string
}