import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json"

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "HfaaTpB9LoogzFmnFj17ZgNKexHPm6J1qMWGjm5p11da"
)

export const TIKTOK_IDL = tiktok

