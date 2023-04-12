export function getLength(entry) {
    const date = {
        hour: new Date().getHours(),
        minute: Math.round((new Date().getMinutes()) / 15) * 15,
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }

    const time = `${date.hour < 10 ? `0${date.hour}` : date.hour}:${date.minute < 10 ? `0${date.minute}` : date.minute}`
    const day = `${date.year}-${date.month < 10 ? `0${date.month}` : date.month}-${date.day < 10 ? `0${date.day}` : date.day}`

    const hrs = parseInt(time.slice(0, 2))
    const min = parseInt(time.slice(3, 5))
    const year = parseInt(day.slice(0, 4))
    const month = parseInt(day.slice(5, 7))
    const day1 = parseInt(day.slice(8, 10))

    const dateStart = entry.dateStart
    const start = entry.start

    const hrsO = parseInt(start.slice(0, 2))
    const minO = parseInt(start.slice(3, 5))
    const yearO = parseInt(dateStart.slice(0, 4))
    const monthO = parseInt(dateStart.slice(5, 7))
    const day1O = parseInt(dateStart.slice(8, 10))

    return ((year - yearO) * (8760) + (month - monthO) * (30 * 24) + (day1 - day1O) * (24) + (hrs - hrsO) + (min - minO) / 60).toFixed(2)
}

export function getTime() {
    const date = {
        hour: new Date().getHours(),
        minute: Math.round((new Date().getMinutes()) / 15) * 15
    }
    return `${date.hour < 10 ? `0${date.hour}` : date.hour}:${date.minute < 10 ? `0${date.minute}` : date.minute}`
}

export function getDate() {
    const date = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }
    return `${date.year}-${date.month < 10 ? `0${date.month}` : date.month}-${date.day < 10 ? `0${date.day}` : date.day}`
}

export function getEndTime(entry) {
    const hrs = parseInt(entry.start.slice(0, 2))
    const min = parseInt(entry.start.slice(3, 5)) / 60
    const year = parseInt(entry.dateStart.slice(0, 4))
    const month = parseInt(entry.dateStart.slice(5, 7))
    const day1 = parseInt(entry.dateStart.slice(8, 10))

    const days = Math.floor(entry.length / 24)
    const hours = Math.floor(entry.length) + hrs - (days * 24)
    const minutes = entry.length - Math.floor(entry.length) + min

    if (minutes < 1) {
        return `${hours}:${minutes * 60 === 0 ? '00' : minutes * 60}`
    } else {
        return `${hours + 1}:${(minutes - 1) === 0 ? '00' : (minutes - 1) * 60}`
    }
}