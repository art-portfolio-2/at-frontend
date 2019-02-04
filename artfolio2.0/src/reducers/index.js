import { SIGN_IN } from '../actions'

const initialState = {
    posts: [{
        img: "https://loremflickr.com/320/240",
        datePosted: Date.now(),
        title: "Hey",
        author: "Dr. Marsh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ipsum. Sed metus enim, tempus a orci ut, venenatis blandit dolor. Vivamus consequat, quam id varius pellentesque, erat nisi facilisis purus, a tincidunt justo tortor ut mi. Nunc mi nisl, laoreet id libero sed, aliquam eleifend mauris. Pellentesque vel justo at purus bibendum congue. Nullam sit amet mauris enim. Nam id augue cursus, egestas augue ac, rhoncus enim. Integer rutrum tempus velit vitae feugiat. Donec tristique dolor et magna cursus posuere.",
        id: 0,
    }, {
        img: "https://via.placeholder.com/150",
        datePosted: Date.now(),
        title: "Howdy",
        author: "Dr. Stev",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ipsum. Sed metus enim, tempus a orci ut, venenatis blandit dolor. Vivamus consequat, quam id varius pellentesque, erat nisi facilisis purus, a tincidunt justo tortor ut mi. Nunc mi nisl, laoreet id libero sed, aliquam eleifend mauris. Pellentesque vel justo at purus bibendum congue. Nullam sit amet mauris enim. Nam id augue cursus, egestas augue ac, rhoncus enim. Integer rutrum tempus velit vitae feugiat. Donec tristique dolor et magna cursus posuere.",
        id: 1,
    }, {
        img: "https://via.placeholder.com/157",
        datePosted: Date.now(),
        title: "Hello",
        author: "Dr. Sig",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ipsum. Sed metus enim, tempus a orci ut, venenatis blandit dolor. Vivamus consequat, quam id varius pellentesque, erat nisi facilisis purus, a tincidunt justo tortor ut mi. Nunc mi nisl, laoreet id libero sed, aliquam eleifend mauris. Pellentesque vel justo at purus bibendum congue. Nullam sit amet mauris enim. Nam id augue cursus, egestas augue ac, rhoncus enim. Integer rutrum tempus velit vitae feugiat. Donec tristique dolor et magna cursus posuere.",
        id: 2,
    }],
    signedIn: false,
    artist: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                signedIn: true
            }
        default:
            return state
    }
} 