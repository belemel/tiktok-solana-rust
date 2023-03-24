import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json"

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "2vMgWJLSD2rXwSxWHgZrrNcjZUF9Qpp2vs9g986GSWbF"
)

export const TIKTOK_IDL = tiktok

