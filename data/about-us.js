import dale from '@/assets/images/dale-about-us.png'

class Person {
  constructor (name, image, description) {
    this.name = name
    this.image = image
    this.description = description
  }
}

export default [
  new Person('Dale Gordon', dale, 'JavaScript, music and hiking enthusiast'),
  new Person('Justin Hoffman', dale, 'Overall sick oak :D')
]
