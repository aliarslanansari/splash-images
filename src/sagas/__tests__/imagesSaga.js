import { setImages } from '../../actions';
import { runSaga } from 'redux-saga';
import { getPage, handleImagesLoad } from '../imagesSaga';
import * as api from '../../api';
test('selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});

test('shoud load images and handle them in case of success', async () => {
    const dispatchActions = [];
    const mockedImages = ['abc', 'def', 'ghi'];
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));
    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchActions.push(action),
    };
    await runSaga(fakeStore, handleImagesLoad).done;
    expect(api.fetchImages.mock.calls.length).toBe(1);
    expect(dispatchActions).toContainEqual(setImages(mockedImages));
});
