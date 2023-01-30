import {numIslands} from "./index";


describe("numIslands", () => {
    describe("Случаи с одной строкой", () => {
        describe("единичный случай", () => {
            it("[0]", () => {
                const grid = [['0']];
                expect(numIslands(grid)).toBe(0);
            })

            it("[1]", () => {
                const grid = [['1']];
                expect(numIslands(grid)).toBe(1);
            })
        })
        describe("Переход к следующей ячейке", () => {
            it("[0, 0]", () => {
                const grid = [['0', '0']];
                expect(numIslands(grid)).toBe(0);
            })
            it("[0, 1]", () => {
                const grid = [['0', '1']];
                expect(numIslands(grid)).toBe(1);
            })
            it("[1, 0]", () => {
                const grid = [['1', '0']];
                expect(numIslands(grid)).toBe(1);
            })
            it("[1, 1]", () => {
                const grid = [['1', '1']];
                expect(numIslands(grid)).toBe(1);
            })
        })
        describe("Переход к следующему острову", () => {
            it("[1, 1]", () => {
                const grid = [['1', '1']];
                expect(numIslands(grid)).toBe(1);
            })
            it("[1, 0, 1]", () => {
                const grid = [['1', '0', '1']];
                expect(numIslands(grid)).toBe(2);
            })
        })
        describe("Переход к следующей ячейке внутри острова", () => {
            it("[1, 0, 1]", () => {
                const grid = [['1', '0', '1']];
                expect(numIslands(grid)).toBe(2);
            })
            it("[1, 1, 0, 1]", () => {
                const grid = [['1', '0', '1']];
                expect(numIslands(grid)).toBe(2);
            })
            it("[1, 1, 0, 1, 1, 1, 0]", () => {
                const grid = [['1', '1', '0', '1', '1', '1', '0']];
                expect(numIslands(grid)).toBe(2);
            })
            it("[1, 1, 0, 1, 1, 1, 0, 1]", () => {
                const grid = [['1', '1', '0', '1', '1', '1', '0', '1']];
                expect(numIslands(grid)).toBe(3);
            })
        })
    })
    describe("Случаи с несколькими строками", () => {
        describe("единичный случай", () => {
            it(`[1]
                      [1]`, () => {
                const grid = [['1'],['1']];
                expect(numIslands(grid)).toBe(1);
            })
        })
        describe("переход к следующему острову", () => {
            it(`[1][1][0]
                      [1][0][1]
                      [1][0][1]`, () => {
                const grid = [['1', '1', '0'],['1', '0', '1'], ['1', '0', '1']];
                expect(numIslands(grid)).toBe(2);
            })
        })
        describe("переход к следующей ячейке влево или вверх", () => {
            it(`[1][1][0]
                      [0][1][0]
                      [1][1][0]`, () => {
                const grid = [['1', '1', '0'],['0', '1', '0'], ['1', '1', '0']];
                expect(numIslands(grid)).toBe(1);
            })
        })
    })
    describe("Корнер кейсы", () => {
        it("Пустой массив", () => {
            expect(numIslands([])).toBe(0);
        })
    })
})
