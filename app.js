const filterItem = document.querySelector('.items')
const filterImg = document.querySelectorAll('.image')

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains('item')) {
      filterItem.querySelector('.active').classList.remove('active')
      selectedItem.target.classList.add('active')
      let filterName = selectedItem.target.getAttribute('data-name')
      filterImg.forEach((image) => {
        filterImages = image.getAttribute('data-name')
        if (filterImages == filterName || filterName == 'all') {
          image.classList.add('show')
          image.classList.remove('hide')
        } else {
          image.classList.remove('show')
          image.classList.add('hide')
        }
      })
    }
  }
}
