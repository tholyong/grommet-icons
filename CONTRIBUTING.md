**Steps to contribute icons to grommet-icons**

1) Fork the grommet-icons project and clone.
2) When adding new icons, export SVGs as stroke versions as opposed to outline. The SVG path should include `stroke="#000"` and `stroke-width="2"`. 
3) Add your raw svg files in this [folder](https://github.com/grommet/grommet-icons/tree/master/public/img) (use the other raw svgs as a reference on how to structure your file content and naming conventions).
4) Run `yarn generate-icons` to generate the react components from the raw svg files from your grommet-icons fork.
5) Consider adding search metadata to this [file](https://github.com/grommet/grommet-icons/blob/master/src/js/metadata.js) to help finding your new icon.
6) Run `yarn test-update` to recreate the test snapshot files.
7) Share with the community by submitting a PR.
