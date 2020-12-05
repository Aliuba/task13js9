// проба
// function myfunction(func) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (func < 10) { resolve(func) } else

//             { reject("bigger than 10") }
//         }, 100)
//     })

// }


// function two(a, power) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Number.isInteger(a)) { resolve(a ** power) } else

//             { reject("not integer") }
//         }, 1000)
//     })

// }

// myfunction(5.5)
// .then(value => two(value, 3))
// .then(value => console.log(value))
// .catch(reason => console.log(reason))
// .finally(() => console.log("2222356"))

//домашня: 7 завдань зробити промісами і таке саме колбеками
// спочатку проміси

// function wakeUp(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time >= 8) {
//                 console.log("I woke up!")
//                 resolve("croissant")
//             } else {
//                 reject("I'm still asleep")
//             }
//         }, 500)
//     })
// }

// function breakfast(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food === "croissant") {
//                 console.log("I have food")
//                 resolve("water")
//             } else {
//                 reject("I have not croissant")
//             }
//         }, 200)
//     })
// }

// function haveShower(water) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (water === "water") {
//                 console.log("I'm going to have a shower")
//                 resolve("good MorNing")
//             } else {
//                 reject("the water was shut off")
//             }
//         }, 300)
//     })
// }

// function job(state) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if (state.toLowerCase() === "good morning") {
//                 console.log("I'm working")
//                 let time = 9;
//                 resolve(time + 4)
//             } else {
//                 reject("I must to listen the music")
//             }

//         }, 750)
//     })
// }

// function lunch(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let lunch_time = 13
//             if (lunch_time >= +time) {
//                 console.log("you can go for a lunch")
//                 resolve(time + 1)
//             } else {
//                 reject("it's not a time for a rest")
//             }
//         }, 1000)
//     })
// }

// function do_shopping(time) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (time >= 14) {
//                 console.log("I'm in the supermarket")
//                 console.log(`time is ${time}`)
//                 res(time + 2)
//             } else {
//                 rej("I have a lunch break")
//             }
//         }, 1500)
//     })
// }

// function do_supper(time) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let supper_time = 16
//             if (supper_time >= +time) {
//                 console.log("we are eating some salat")
//                 res("Good Evening")
//             } else {
//                 rej("I don't want to eat salat")
//             }
//         }, 500)
//     })
// }

// function time_to_study(status) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let str = status.toLowerCase();
//             if (str === "good evening") {
//                 console.log("Done!")
//                 res()

//             } else {
//                 rej("I am going to have some physical exercise")
//             }
//         }, 650)
//     })

// }

// wakeUp(12)
//     .then(value => breakfast(value))
//     .then(value => haveShower(value))
//     .then(value => job(value))
//     .then(value => lunch(value))
//     .then(val => do_shopping(val + "2"))
//     .then(val => do_supper(val + "2"))
//     .catch(reason => console.log(reason))

// wakeUp(12)
//     .then(value => breakfast(value))
//     .then(value => haveShower(value))
//     .then(value => job(value))
//     .then(value => lunch(value))
//     .then(val => do_shopping(val))
//     .then(val => do_supper(val + "2"))
//     .then(val => time_to_study(val))
//     .catch(reason => console.log(reason))

// wakeUp(12)
//     .then(value => breakfast(value))
//     .then(value => haveShower(value))
//     .then(value => job(value))
//     .then(value => lunch(value))
//     .then(val => do_shopping(val))
//     .then(val => do_supper(val))
//     .then(val => time_to_study(val + "22"))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log("I did it"))



function wakeUp(time, cb) {
    setTimeout(() => {
        if (+time >= 8) {
            console.log("I woke up!")
            cb(null, "croissant")
        } else {
            cb("I'm still asleep", null)
        }

    }, 100)

}
// wakeUp(10, (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     } else {
//         console.log(data)
//         breakfast(data, (err, data) => {
//             if (err) {
//                 console.log(err)
//                 return;
//             } else {
//                 console.log(data)
//                 haveShower(data, (err, data) => {
//                     if (err) {
//                         console.log(err)
//                         return;
//                     } else {
//                         console.log(data)
//                         job(data, (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                                 return;
//                             } else {
//                                 console.log(data)
//                                 lunch(data, (err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                         return;
//                                     } else {
//                                         console.log(data)
//                                         do_shopping(data, (err, data) => {
//                                             if (err) {
//                                                 console.log(err)
//                                                 return;
//                                             } else {
//                                                 console.log(data)
//                                                 do_supper(data, (err, data) => {
//                                                     if (err) {
//                                                         console.log(err)
//                                                         return;
//                                                     } else {
//                                                         console.log(data)
//                                                         time_to_study(data, (err, data) => {
//                                                             if (err) {
//                                                                 console.log(err)
//                                                                 return;
//                                                             } else {
//                                                                 console.log(data)

//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }

// })


function breakfast(data, cb) {
    setTimeout(() => {
        if (data.toLowerCase() === "croissant") {
            console.log(`I have food ${data}`)
            cb(null, `water`)
        } else {

            cb("I have not croissant", null)
        }
    }, 200)

}

function haveShower(water, cb) {

    setTimeout(() => {
        if (water.toLowerCase() === "water") {
            console.log("I'm going to have a shower")
            cb(null, `good MorNing`)
        } else {
            cb("the water was shut off", null)
        }
    }, 250)

}

function job(state, cb) {

    setTimeout(() => {

        if (state.toLowerCase() === "good morning") {
            console.log("I'm working")
            let time = 9;
            cb(null, +time + 4)
        } else {
            cb("I must to listen the music", null)
        }

    }, 300)

}

function lunch(time, cb) {

    setTimeout(() => {
        let lunch_time = 13
        if (lunch_time >= +time) {
            console.log("you can go for a lunch")
            cb(null, +time + 1)
        } else {
            cb("it's not a time for a rest", null)
        }
    }, 350)

}

function do_shopping(time, cb) {

    setTimeout(() => {
        if (time >= 14) {
            console.log("I'm in the supermarket")
            console.log(`time is ${time}`)
            cb(null, +time + 2)
        } else {
            cb("I have a lunch break", null)
        }
    }, 1500)
}


function do_supper(time, cb) {

    setTimeout(() => {
        let supper_time = 16
        if (supper_time >= +time) {
            console.log("we are eating some salat")
            cb(null, "Good Evening")
        } else {
            cb("I don't want to eat salat", null)
        }
    }, 500)

}

function time_to_study(status, cb) {

    setTimeout(() => {
        let str = status.toLowerCase();
        if (str === "good evening") {
            console.log("Done!")
            cb(null, "finish")

        } else {
            cb("I am going to have some physical exercise", null)
        }
    }, 650)

}

wakeUp(10, (err, data) => {
    if (err) {
        console.log(err)
        return;
    } else {
        console.log(data)
        breakfast(data, (err, data) => {
            if (err) {
                console.log(err)
                return;
            } else {
                console.log(data)
                haveShower(data, (err, data) => {
                    if (err) {
                        console.log(err)
                        return;
                    } else {
                        console.log(data)
                        job(data, (err, data) => {
                            if (err) {
                                console.log(err)
                                return;
                            } else {
                                console.log(data)
                                lunch(data, (err, data) => {
                                    if (err) {
                                        console.log(err)
                                        return;
                                    } else {
                                        console.log(data)
                                        do_shopping(data + "55", (err, data) => {
                                            if (err) {
                                                console.log(err)
                                                return;
                                            } else {
                                                console.log(data)
                                                do_supper(data, (err, data) => {
                                                    if (err) {
                                                        console.log(err)
                                                        return;
                                                    } else {
                                                        console.log(data)
                                                        time_to_study(data, (err, data) => {
                                                            if (err) {
                                                                console.log(err)
                                                                return;
                                                            } else {
                                                                console.log(data)

                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

})