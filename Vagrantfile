Vagrant.require_version ">= 2.2"

ANSIBLE_VERSION = "2.9.*"

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-18.04"

  config.vm.synced_folder "./", "/vagrant"

  # Jekyll 
  config.vm.network :forwarded_port, guest: 4000, host: 4000

  # LiveReload
  config.vm.network :forwarded_port, guest: 35729, host: 35729

  config.vm.provision "ansible_local" do |ansible|
    ansible.compatibility_mode = "2.0"
    ansible.install_mode = "pip_args_only"
    ansible.pip_args = "ansible==#{ANSIBLE_VERSION}"
    ansible.pip_install_cmd = "curl https://bootstrap.pypa.io/pip/2.7/get-pip.py | sudo python"
    ansible.playbook = "deployment/ansible/publicmapping.yml"
    ansible.galaxy_role_file = "deployment/ansible/roles.yml"
    ansible.galaxy_roles_path = "deployment/ansible/roles"
  end

  config.vm.provision "shell" do |s|
    s.inline = <<-SHELL
    if ! grep -q "cd /vagrant" "/home/vagrant/.bashrc"; then
      echo "cd /vagrant" >> "/home/vagrant/.bashrc"
    fi
    
    cd /vagrant
    su vagrant ./scripts/update
    SHELL
  end
end
