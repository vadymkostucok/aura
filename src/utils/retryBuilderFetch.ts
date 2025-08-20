/* eslint-disable @typescript-eslint/no-explicit-any */
import { builder } from '@builder.io/sdk'

export async function retryBuilderFetch<T = any>(
    model: string,
    opts: any,
    maxRetries = 3,
    delayMs = 500
): Promise<T | null> {
    builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const res = await builder.get(model, opts).toPromise()
        if (res && res.data && Object.keys(res.data).length > 0) {
            return res
        }

        if (attempt < maxRetries) {
            await new Promise((r) => setTimeout(r, delayMs))
        }
    }

    return null
}
