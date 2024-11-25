/**
 UseSelector -  useSelector is a hook that is provided by reaact-redux and it helps you to access the store and iit also triggers re-renders whenever
 any variable changes in the store oobject.Before usinng useSelector our main file should be wrapped with Proviider component thhat maakkes the store
 available to all the nested components of the application.

 UseDispatcch - It is a hook, that is provided by  react-redux and it helps to dispatch an action to Redux store .

 mapStateToProp - It is a function that is used to map state from redux store to the props of react component.

 mapDispatcchToProop - It is a function that is used to map action creatoores to the props of reacct ccomponent.

 ReduxThunk - Redux thunk is a middleware that is provided by react-redux and it allows you to write a action creaator that returns the function
 instead of plain oobject. Now this returnedd functions helps to perform any asynchrous operationn before dispatching any action to redducer.

 Connecct() - It is a higher rder functionn that is uused to cconnect the rreact component with Reduux store, it takes two parameter
 1)mapStateToProp 2)mapDispatchToProp

 Provider - Provider iis a higher order cccomponent that makkes redux store available to all the nnested components of the appllication.

 getState - getState is a method that is used to retrieve currennt state from the redux store.

 CombineReducer - It is a function that is used to combinne mulltiple reducer inn one single reducer, and that can be further passed in createStore methhod

compose - It is a function that is used to combine multiplle functiions into single funcction

Redux Observables - It is a middleware that is used to write compllex async logic before diispatcching aanny acction using RxJS oobservablles.

Reduux saga -  It is also a middleware that is used to write complex async llogic usiing generator functions and other advannced features.

 */