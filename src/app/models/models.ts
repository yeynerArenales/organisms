export interface responseApi{
    data: organism[]
}

export interface organism{
    ID: string,
    Name: string,
    parent: number
}