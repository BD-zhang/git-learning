export interface menuListArrType {
    name: string,
    url: string
}

export interface menuListType {
    [index: number]: Array<menuListArrType>
}