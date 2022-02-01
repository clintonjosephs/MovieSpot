import Count from "../Controllers/Count.js";
import movies from "../__mocks__/moviesMock.js";

describe('check count of items to be displayed on the homepage', () => {
    test('test if count function returns correct count', () => {
         // Arrange
         const data = movies;

         //Act
         const count = Count(data);

         //Assert

         expect(count).toEqual(10);
         expect(count).toEqual(data.length);
         expect(count - data.length).toEqual(0);
         expect(count - 10).toEqual(0);
         expect(typeof data).toEqual('object');
         expect(typeof count).toEqual('number');
    });
});