import Categories from '../screens/Categories';
import Products from '../screens/Products';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productDetail from '../screens/productDetail';

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
              backgroundColor: "gray",
            },
            headerTintColor: "white",
            navigationBarColor: "gray",
            headerTitleStyle: {
              fontFamily: 'Bitter-Bold',
              fontSize: 18,
              color: "white",
            },
          }}
        >
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown:true,
            title:'Categorias'
        
        }}
          
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown:true,
            title:'Productos'
        
        }}
        />
        <Stack.Screen
          name="productDetail"
          component={productDetail}
          options={{headerShown:true,
            title:'Detalles'
        
        }}
        />
      </Stack.Navigator>
    );
  };
  
  export default ShopNavigator;