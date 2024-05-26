import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image 
        source={{ uri: 'https://i.pinimg.com/236x/9c/90/4a/9c904ad6f19ece43e0462a9e9609c861.jpg' }}
        style={styles.imagem}
      />
      <Text>Esmeralda Freire</Text>
      <StatusBar style="auto" />
    </View>
  );
};
 
const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <View>
        <Text style={styles.titulo}>Sobre mim</Text>
        <Text style={styles.descricao}>
          Sou uma estudante de Análise e Desenvolvimento de Sistemas pelo Embarque Digital. 
          Resido em Recife-PE, me considero uma pessoa criativa, centrada e comunicativa. 
          Sou uma desenvolvedora Front-End e espero que queira saber um pouco mais sobre mim.
        </Text>
      </View>
    </View>
  );
};
 
const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
       <View>
        <Text style={styles.titulo}>Projetos</Text>
        <Text style={styles.topico}>Portfólio</Text>
        <Text style={styles.topico}>Jogo da Forca</Text>
        <Text style={styles.topico}>Calculadora</Text>
      </View>
    </View>
  );
};
 
const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
    <View>
     <Text style={styles.titulo}>Formações</Text>
     <Text style={styles.topico}>Análise e Desenvolvimento de Sistemas - Embarque Digital</Text>
     <Text style={styles.topico}>Formação Acelerada em Programação Front-End - Softex</Text>
     <Text style={styles.topico}>Condomínio Digital 4.0 - Instituto Aliança</Text>
   </View>
 </View>
  );
};
 
const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');
 
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
 
  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };
 
  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };
 
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>
 
      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Sobre mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Formações</Text>
          </TouchableOpacity>
        </View>
      )}
 
      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
  },
  descricao: {
    fontSize: 16,
  },
  topico: {
    fontSize: 16,
  },
});
 
export default App;
