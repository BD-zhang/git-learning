export interface menuListArrType {
    name: string,
    path: string
}

export interface menuListType {
    [index: number]: Array<menuListArrType>
}