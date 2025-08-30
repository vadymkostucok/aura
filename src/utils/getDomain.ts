export function getDomain(link: string): string {
    try {
        const url = new URL(link)
        return `${url.protocol}//${url.hostname}`
    } catch (error) {
        return link
    }
}
