function collide(n,m){
    if (n.x - m.x < m.width/2 + n.width/2
      && m.x - n.x < m.width/2 + n.width/2
      && n.y - m.y < m.height/2 + n.height/2
      && m.y - n.y < m.height/2 + n.height/2) {
    return true
  }
  else {
    return false
    
  }
  }