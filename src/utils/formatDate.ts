export const fotmatDate = (date: string) => {
    const splitedDate = date.split('-')
    const day = splitedDate[2]
    const month = splitedDate[1]
    const year = splitedDate[0]

    return `${normalizeTwoNumbers(day)}/${normalizeTwoNumbers(month)}/${year}`
}

export const normalizeTwoNumbers = (item: string) => Number(item) > 9 ? item : `0${item}`