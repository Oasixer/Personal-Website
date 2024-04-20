USERNAME=k
EMAIL=kaelan.ms@gmail.com

ssh-keygen -t ed25519 -C $EMAIL
eval "$ssh-agent -s)"
ssh-add /home/$USERNAME/.ssh/id_ed25519
xclip -selection clipboard < /home/$USERNAME/.ssh/id_ed25519.pub
# google-chrome-stable https://github.com/settings/ssh/new > /dev/null 2>&1
firefox https://github.com/settings/ssh/new > /dev/null 2>&1

git config --global user.name "Kaelan Moffett-Steinke"
git config --global user.email "kaelan.ms@gmail.com"

mkdir -p /home/$USERNAME/artifacts

# git clone git@github.com/Oasixer /home/$USERNAME/
TARGET_DIR="/home/$USERNAME/mcflurry"
git -C "$TARGET_DIR" pull || git clone git@github.com:Oasixer/mcflurry.git "$TARGET_DIR"

sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt install -y python3.11 python3.11-venv python3.11-distutils


#a) deadsnakes adds python versions as an apt(ppa?) repository
#sudo add-apt-repository ppa:deadsnakes/ppa
#
#b) sudo apt install python3.11
#
#now, 
#ls /usr/bin | grep python
#>python3
#>python3.11
#>python3.8
#
#c) use update-alternatives:
#sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1
#sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 2
#
#(use their cli:)
#sudo update-alternatives --config python3
#
#d) python doesnt ship w/ pip, venv, or distutils(for older python module installation).
#da) REINSTALL python3-apt with our new version of Python active:
#sudo apt remove --purge python3-apt
#sudo apt autoclean
#sudo apt install python3-apt
#sudo apt install python3.11-distutils
#sudo apt install python3.11-venv
#curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3
#curl -sS https://bootstrap.pypa.io/get-pip.py | python3


