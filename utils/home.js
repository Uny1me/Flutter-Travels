export function routePage(navigation, PageTitle) {
    navigation.navigate(PageTitle)
}

export function goBack(navigation) {
    navigation.goBack()
}

export const switchTabs = (updateState, val) => {
    // Update State function, text to update state with
    updateState(val)
}