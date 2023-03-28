import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json"

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "9RcEaJ4giB8fZJiJBsrKvrcNeas1b9LZoi2JpaeoBaES"
)

export const TIKTOK_IDL = tiktok

