export function getTypesTimesObj(entries, user, isType) {
    const typeArr = []
    const typeTimes = []
    const typesToDisplay = []

    const userEntries = entries.filter(entry => {
        return user === entry.user
    })

    for (let entry of userEntries) {
        if (isType) {
            if (!typeArr.includes(entry.type)) {
                typeArr.push(entry.type)
                typeTimes.push(0)
            }
        } else {
            if (!typeArr.includes(entry.name)) {
                typeArr.push(entry.name)
                typeTimes.push(0)
            }
        }
    }

    for (let entry of userEntries) {
        if (isType) {
            for (let i = 0; i < typeTimes.length; i++) {
                if (entry.type === typeArr[i]) {
                    typeTimes[i] = typeTimes[i] + entry.length
                }
            }
        } else {
            for (let i = 0; i < typeTimes.length; i++) {
                if (entry.name === typeArr[i]) {
                    typeTimes[i] = typeTimes[i] + entry.length
                }
            }
        }
    }

    for (let i = 0; i < typeTimes.length; i++) {
        typesToDisplay.push({ [typeArr[i]]: typeTimes[i] })
    }

    return typesToDisplay
}